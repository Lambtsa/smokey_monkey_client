"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  type FormEvent, type ReactElement, useCallback, useEffect, useMemo, useState,
} from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Form } from "@/components/form";
import { Icon } from "@/components/icon";
import { InputDate } from "@/components/input_date";
import { InputNumber } from "@/components/input_number";
import { InputText } from "@/components/input_text";
import { details } from "@/constants/details";
import { useTranslation } from "@/hooks/useTranslation";
import { MAX_GUESTS } from "@/schemas/reservation.schema";
import { formatTime } from "@/utils/date";

/* The date is set once the page is in the visitor's browser, in their own time zone */
const emptyValues = {
  name: "",
  email: "",
  count: "1",
  date: "",
};

export const ReservationSection = (): ReactElement => {
  const { t } = useTranslation();

  /* ################################################## */
  /* State */
  /* ################################################## */
  const [isLoading, setIsLoading] = useState(false);

  /* ################################################## */
  /* Forms */
  /* ################################################## */
  const validationSchema = useMemo(() => {
    const required = (field: string): string => t({
      id: "reservation.form.field.error.required",
    }, {
      field,
    });

    return z.object({
      name: z.string().trim().min(1, {
        error: required(t({
          id: "reservation.form.name.placeholder",
        })),
      }),
      email: z.string().trim().pipe(z.email({
        error: t({
          id: "reservation.form.field.error.email",
        }),
      })),
      count: z.string().refine((value) => Number(value) >= 1, {
        error: t({
          id: "reservation.form.field.error.min",
        }),
      }).refine((value) => Number(value) <= MAX_GUESTS, {
        error: t({
          id: "reservation.form.field.error.max",
        }),
      }),
      date: z.string().min(1, {
        error: required(t({
          id: "reservation.form.date.label",
        })),
      }),
    });
  }, [t]);

  /**
   * Options chosen
   * https://react-hook-form.com/api/useform/
   */
  const { control, formState, handleSubmit, reset, setValue } = useForm({
    defaultValues: emptyValues,
    mode: "onChange",
    shouldFocusError: true,
    /* All errors from each field will be gathered */
    criteriaMode: "all",
    resolver: zodResolver(validationSchema),
  });

  const resetForm = useCallback(() => {
    reset({
      ...emptyValues,
      date: formatTime(new Date()),
    });
  }, [reset]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  /* ################################################## */
  /* Actions */
  /* ################################################## */
  const showError = useCallback(() => {
    toast.error(t({
      id: "reservation.form.submit.error.title",
    }), {
      description: t({
        id: "reservation.form.submit.error.message",
      }),
    });
  }, [t]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isLoading) {
        return;
      }

      void handleSubmit(
        async (formFields) => {
          setIsLoading(true);
          const response = await fetch("/api/v1/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formFields),
          }).catch(() => null);
          setIsLoading(false);

          if (!response?.ok) {
            showError();
            return;
          }

          toast.success(t({
            id: "reservation.form.submit.success.title",
          }), {
            description: t({
              id: "reservation.form.submit.success.message",
            }),
          });
          /* Empty the form once the request is sent */
          resetForm();
        },
        showError,
      )();
    },
    [handleSubmit, isLoading, resetForm, showError, t],
  );

  return (
    <section id="reservation" className="px-6 py-20 md:px-10 md:py-32 bg-bottle">
      <div className="flex flex-wrap gap-12 md:gap-18 max-w-[1180px] mx-auto">
        <div className="flex flex-col gap-6 flex-[1_1_340px]">
          <p className="eyebrow">
            {t({
              id: "reservation.intro.title",
            })}
          </p>
          <h2 className="font-display font-normal text-4xl md:text-[60px] leading-[1.05]">
            {t({
              id: "reservation.intro.subtitle",
            })}
          </h2>
          <p className="text-lg leading-relaxed font-light text-parchment">
            {t({
              id: "reservation.intro.content",
            })}
          </p>
          <ul className="flex flex-col gap-4 mt-2 text-lg">
            <li className="flex items-start gap-3.5">
              <Icon icon="pin" size={22} className="shrink-0 mt-0.5 text-brass" />
              <Link target="_blank" rel="noopener noreferrer" href={details.googleMaps} className="whitespace-pre-line hover:text-brass">
                {t({
                  id: "reservation.intro.address",
                })}
              </Link>
            </li>
            <li className="flex items-center gap-3.5">
              <Icon icon="phone" size={22} className="shrink-0 text-brass" />
              <Link href={details.mobile} className="hover:text-brass">
                {t({
                  id: "footer.contact.phone.text",
                })}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-[1_1_460px]">
          <Form
            btnText="reservation.form.submit.btn.text"
            isLoading={isLoading}
            onSubmit={onSubmit}
            aria-label={t({
              id: "reservation.intro.subtitle",
            })}
          >
            <InputText
              name="name"
              autoComplete="given-name"
              className="md:col-span-2"
              control={control}
              error={formState.errors.name}
              label={t({
                id: "reservation.form.name.placeholder",
              })}
            />
            <InputText
              name="email"
              type="email"
              autoComplete="email"
              className="md:col-span-2"
              control={control}
              error={formState.errors.email}
              label={t({
                id: "reservation.form.email.placeholder",
              })}
            />
            <InputDate
              name="date"
              control={control}
              error={formState.errors.date}
              setValue={setValue}
              label={t({
                id: "reservation.form.date.label",
              })}
            />
            <InputNumber
              name="count"
              min={1}
              max={MAX_GUESTS}
              control={control}
              error={formState.errors.count}
              label={t({
                id: "reservation.form.count.placeholder",
              })}
            />
          </Form>
        </div>
      </div>
    </section>
  );
};
