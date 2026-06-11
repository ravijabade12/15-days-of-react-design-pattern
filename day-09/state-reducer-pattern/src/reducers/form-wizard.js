const wizardSteps = [
  { id: "profile", label: "Profile", description: "Fill in your name first." },
  { id: "contact", label: "Contact", description: "Add your email address." },
  { id: "review", label: "Review", description: "Double-check your draft." },
];

function formWizard(state, action) {
  switch (action.type) {
    case "next":
      return {
        ...state,
        step: Math.min(state.step + 1, wizardSteps.length - 1),
      };

    case "previous":
      return {
        ...state,
        step: Math.max(state.step - 1, 0),
      };

    case "reset":
      return {
        ...state,
        step: 0,
      };

    default:
      return state;
  }
}

function createWizardReducer(validateStep) {
  return (state, action, formState = { values: {} }) => {
    if (action.type === "next") {
      const currentStep = state.step;
      const canAdvance = validateStep(currentStep, formState.values);

      if (!canAdvance) {
        return state;
      }

      try {
        localStorage.setItem(
          "form-wizard-draft",
          JSON.stringify({
            step: currentStep + 1,
            values: formState.values,
          }),
        );
      } catch (error) {
        console.warn("Could not save wizard draft:", error);
      }
    }

    return formWizard(state, action);
  };
}

export { createWizardReducer, formWizard, wizardSteps };
