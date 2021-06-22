import React, { useState } from "react";
import styles from "./Form.module.scss";
import FirstStep from "./muliform/FIrstStep";
import SecondStep from "./muliform/SecondStep";
import ThirdStep from "./muliform/ThirdStep";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import FinalStep from "./muliform/FinalStep";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface IData {
  brand: string;
  model: string;
  year: {
    $y: number;
  };
  mileage: number;
  fuelType: "benzyna" | "diesel" | "benzyna + gaz";
  gear: "manualna" | "automatyczna";
  cylinderCapacity: number;
  noAccident: boolean;
  serviced: boolean;
  state: string;
  color: string;
}

const schema = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().required(),
  mileage: yup.number().required(),
});

const Form: React.FC = () => {
  const [step, setStep] = useState(1);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IData) => {
    console.log("odpala");
    setStep(4);
    const year = data.year.$y;
    const newData = { ...data, year };
    if (!localStorage.getItem("cars_feed")) {
      const feed = [newData];
      localStorage.setItem("cars_feed", JSON.stringify(feed));
    } else {
      const feed = [...JSON.parse(localStorage.getItem("cars_feed")), newData];
      localStorage.setItem("cars_feed", JSON.stringify(feed));
    }
  };

  const renderPrevBtn = (step: number) =>
    step > 1 &&
    step < 4 && (
      <Button variant="outlined" onClick={() => setStep((prev) => prev - 1)}>
        PREV
      </Button>
    );

  const renderStep = (step: number) => {
    switch (step) {
      case 1:
        return <FirstStep control={control} errors={errors} />;
      case 2:
        return <SecondStep control={control} errors={errors} />;
      case 3:
        return <ThirdStep control={control} errors={errors} />;
      case 4:
        return <FinalStep />;
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {renderStep(step)}
        {renderPrevBtn(step)}
        {step < 3 && (
          <Button
            variant="outlined"
            onClick={() => setStep((prev) => prev + 1)}
          >
            NEXT
          </Button>
        )}
        {step === 3 && (
          <Button variant="outlined" type="submit">
            SUBMIT
          </Button>
        )}
      </form>
    </div>
  );
};

export default Form;
