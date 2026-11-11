"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  type FormEvent, type ReactElement, useCallback, useEffect, useMemo, useState,
} from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Container, Content } from "@/components/container";
import { Form } from "@/components/form";
import { InputDate } from "@/components/input_date";
import { InputNumber } from "@/components/input_number";
import { InputText } from "@/components/input_text";
import { SplitScreen } from "@/components/split_screen";
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
        error: required("Date"),
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
    <SplitScreen
      order="reversed"
      isForm
      id="reservation"
      imgBlock={(
        <Container
          alignment="left"
          title="reservation.intro.title"
          subtitle="reservation.intro.subtitle"
        >
          <Content alignment="left">
            {t({
              id: "reservation.intro.content",
            })}
          </Content>
        </Container>
      )}
      contentBlock={(
        <Form
          title="reservation.form.title"
          subtitle="reservation.form.subtitle"
          btnText="reservation.form.submit.btn.text"
          onSubmit={onSubmit}
        >
          <InputText
            name="name"
            control={control}
            error={formState.errors.name}
            placeholder={t({
              id: "reservation.form.name.placeholder",
            })}
          />
          <InputText
            name="email"
            control={control}
            error={formState.errors.email}
            placeholder={t({
              id: "reservation.form.email.placeholder",
            })}
          />
          <InputDate
            name="date"
            control={control}
            error={formState.errors.date}
            setValue={setValue}
          />
          <InputNumber
            name="count"
            min={1}
            max={MAX_GUESTS}
            control={control}
            error={formState.errors.count}
            placeholder={t({
              id: "reservation.form.count.placeholder",
            })}
          />
        </Form>
      )}
    />
  );
};
