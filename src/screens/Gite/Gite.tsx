import { v4 as uuid } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Gite1 from "@assets/images/gite1.jpeg";
import Gite2 from "@assets/images/gite2.jpeg";
import Gite3 from "@assets/images/gite3.jpeg";
import Gite4 from "@assets/images/gite4.jpeg";
import Gite5 from "@assets/images/gite5.jpeg";
import { useTranslation } from "@hooks/useTranslation";
import { Jumbotron } from "@components/Jumbotron";
import {
  InnerContainer,
  SplitScreenContainer,
  SplitScreenWrapper,
} from "./Gite.styles";
import { Container, Content } from "@components/Container";
import { InputText } from "@components/InputText";
import { useForm } from "react-hook-form";
// import { useLanguage } from "@context/LanguageContext";
import { useToast } from "@context/ToastContext";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { TypeOf } from "zod";
import { Form } from "@components/Form";
import { InputDate } from "@components/InputDate";

export const GiteScreen = (): JSX.Element => {
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
          { id: "gite.form.field.error.required" },
          { field: "Name" }
        ),
      })
      .min(1, {
        message: t({ id: "gite.form.field.error.min" }, { field: "Name" }),
      })
      .trim(),
    email: z
      .string({
        required_error: t(
          { id: "gite.form.field.error.required" },
          { field: "Email" }
        ),
      })
      .email({
        message: t({ id: "gite.form.field.error.email" }, { field: "Email" }),
      })
      .min(1, {
        message: t({ id: "gite.form.field.error.min" }, { field: "Email" }),
      })
      .trim(),
    date: z.coerce.date().min(new Date(), { message: "Too old" }),
  });

  type FormFields = TypeOf<typeof validationSchema>;

  const defaultValues: FormFields = useMemo(
    () => ({
      name: "",
      email: "",
      date: new Date(),
    }),
    []
  );

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

  const images = [
    {
      id: uuid(),
      data: Gite1,
      alt: "",
    },
    {
      id: uuid(),
      data: Gite2,
      alt: "",
    },
    {
      id: uuid(),
      data: Gite3,
      alt: "",
    },
    {
      id: uuid(),
      data: Gite4,
      alt: "",
    },
    {
      id: uuid(),
      data: Gite5,
      alt: "",
    },
  ];

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
          // const response = await fetch(`${config.backendUrl}/api/email`, {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify({
          //     name: formFields.name,
          //     email: formFields.email,
          //     activities: selectedActivities,
          //   }),
          // });

          console.log({ formFields });
        },
        (err) => {
          console.log({ err });
          addToast({
            type: "danger",
            title: "gite.form.submit.error.title",
            message: "gite.form.submit.error.message",
          });
          setIsLoading(false);
        }
      )();
    },
    [addToast, handleSubmit, isLoading]
  );

  return (
    <>
      <Jumbotron
        title="gite.title"
        subtitle="gite.subtitle"
        images={images}
        type="dot"
        link={{ text: "gite.btn", href: "#reservation" }}
      />
      <SplitScreenContainer id="reservation">
        <SplitScreenWrapper>
          <InnerContainer>
            <Container
              alignment="left"
              title="home.location.title"
              subtitle="home.location.subtitle"
            >
              <Content alignment="left">
                {t({ id: "home.gite.content" })}
              </Content>
            </Container>
          </InnerContainer>
          <Form
            title="gite.form.title"
            subtitle="gite.form.subtitle"
            btnText="gite.form.submit.btn.text"
            onSubmit={onSubmit}
          >
            <InputText
              name="name"
              control={control}
              error={formErrors.name}
              placeholder={t({ id: "gite.form.name.placeholder" })}
            />
            <InputText
              name="email"
              control={control}
              error={formErrors.email}
              placeholder={t({ id: "gite.form.email.placeholder" })}
            />
            <InputDate
              name="date"
              control={control}
              error={formErrors.email}
              setValue={setValue}
              placeholder={t({ id: "gite.form.email.placeholder" })}
            />
          </Form>
        </SplitScreenWrapper>
      </SplitScreenContainer>
    </>
  );
};
