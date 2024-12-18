import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "@hooks/useTranslation";
import { Container, Content } from "@components/Container";
import { InputText } from "@components/InputText";
import { useForm } from "react-hook-form";
// import { useLanguage } from "@context/LanguageContext";
import { useToast } from "@context/ToastContext";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { TypeOf } from "zod";
import { Form } from "@components/Form";
import { InputDate } from "@components/InputDate";
import { config } from "config";
import { InputNumber } from "@components/InputNumber";
import { SplitScreen } from "@components/SplitScreen";
import { formatTime } from "@helpers/date";

export const ReservationSection = (): JSX.Element => {
  const { t } = useTranslation();
  // const { locale } = useLanguage();
  const { addToast } = useToast();
  /* ################################################## */
  /* State */
  /* ################################################## */
  const [isLoading, setIsLoading] = useState(false);

  /* ################################################## */
  /* Forms */
  /* ################################################## */
  const validationSchema = z.object({
    name: z
      .string({
        required_error: t(
          { id: "reservation.form.field.error.required" },
          { field: "Name" },
        ),
      })
      .min(1, {
        message: t(
          { id: "reservation.form.field.error.min" },
          { field: "Name" },
        ),
      })
      .trim(),
    email: z
      .string({
        required_error: t(
          { id: "reservation.form.field.error.required" },
          { field: "Email" },
        ),
      })
      .email({
        message: t(
          { id: "reservation.form.field.error.email" },
          { field: "Email" },
        ),
      })
      .min(1, {
        message: t(
          { id: "reservation.form.field.error.min" },
          { field: "Email" },
        ),
      })
      .trim(),
    count: z.string({
      required_error: t(
        { id: "reservation.form.field.error.required" },
        { field: "Email" },
      ),
    }),
    date: z.string(),
  });

  type FormFields = TypeOf<typeof validationSchema>;

  const defaultValues: FormFields = useMemo(() => {
    return {
      name: "",
      email: "",
      count: "1",
      date: formatTime(new Date()),
    };
  }, []);

  /**
   * Options chosen
   * https://react-hook-form.com/api/useform/
   */
  const { control, formState, handleSubmit, reset, setValue } = useForm({
    defaultValues,
    mode: "onChange",
    shouldFocusError: true,
    /* All errors from each field will be gathered */
    criteriaMode: "all",
    resolver: zodResolver(validationSchema),
  });

  const formErrors = useMemo(() => {
    return formState.errors;
  }, [formState.errors]);

  useEffect(() => {
    reset(defaultValues, { keepDefaultValues: true });
  }, [reset, defaultValues]);

  /* ################################################## */
  /* Actions */
  /* ################################################## */
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isLoading) {
        return;
      }

      handleSubmit(
        async (formFields) => {
          setIsLoading(true);
          const response = await fetch(`${config.frontendUrl}/api/email`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formFields.name,
              email: formFields.email,
              date: formFields.date,
              count: formFields.count,
            }),
          });

          if (!response.ok) {
            addToast({
              type: "danger",
              title: "reservation.form.submit.error.title",
              message: "reservation.form.submit.error.message",
            });
          } else {
            addToast({
              type: "success",
              /* TODO: Make this success message */
              title: "reservation.form.submit.success.title",
              message: "reservation.form.submit.success.message",
            });
            /* Reset the forms after valid response */
            reset(defaultValues, { keepDefaultValues: true });
          }
          setIsLoading(false);
        },
        (err) => {
          console.log({ err });
          addToast({
            type: "danger",
            title: "reservation.form.submit.error.title",
            message: "reservation.form.submit.error.message",
          });
          setIsLoading(false);
        },
      )();
    },
    [addToast, defaultValues, handleSubmit, isLoading, reset],
  );

  return (
    <SplitScreen
      order="reversed"
      isForm
      id="reservation"
      imgBlock={
        <Container
          alignment="left"
          title="reservation.intro.title"
          subtitle="reservation.intro.subtitle"
        >
          <Content $alignment="left">
            {t({ id: "reservation.intro.content" })}
          </Content>
        </Container>
      }
      contentBlock={
        <Form
          title="reservation.form.title"
          subtitle="reservation.form.subtitle"
          btnText="reservation.form.submit.btn.text"
          onSubmit={onSubmit}
        >
          <InputText
            name="name"
            control={control}
            error={formErrors.name}
            placeholder={t({ id: "reservation.form.name.placeholder" })}
          />
          <InputText
            name="email"
            control={control}
            error={formErrors.email}
            placeholder={t({ id: "reservation.form.email.placeholder" })}
          />
          <InputDate
            name="date"
            control={control}
            error={formErrors.date}
            setValue={setValue}
            placeholder={t({ id: "reservation.form.email.placeholder" })}
          />
          <InputNumber
            name="count"
            min={1}
            max={10}
            control={control}
            error={formErrors.count}
            placeholder={t({ id: "reservation.form.count.placeholder" })}
          />
        </Form>
      }
    />
  );
};
