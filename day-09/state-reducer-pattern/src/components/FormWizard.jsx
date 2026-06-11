import { useContext, useMemo, useReducer } from "react";
import { FormContext } from "../context";
import { formWizard, wizardSteps } from "../reducers/form-wizard";

export default function FormWizard({
  reducer = formWizard,
  steps = wizardSteps,
}) {
  const formContext = useContext(FormContext);
  const formState = formContext?.state ?? { values: {} };

  const reducerWithContext = useMemo(
    () => (state, action) => reducer(state, action, formState),
    [reducer, formState],
  );

  const [state, dispatch] = useReducer(reducerWithContext, {
    step: 0,
  });

  const currentStep = steps[state.step] ?? steps[0];
  const canGoPrevious = state.step > 0;
  const canGoNext = state.step < steps.length - 1;

  return (
    <div className="flex flex-col items-center space-y-4 rounded-xl border p-4 shadow-sm">
      <p className="text-xl font-bold">
        Step {state.step + 1} / {steps.length}: {currentStep.label}
      </p>
      <p className="text-sm text-gray-600">{currentStep.description}</p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          className="rounded bg-slate-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-slate-300"
          onClick={() => dispatch({ type: "previous" })}
          disabled={!canGoPrevious}
        >
          Previous
        </button>

        <button
          className="rounded bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-blue-300"
          onClick={() => dispatch({ type: "next" })}
          disabled={!canGoNext}
        >
          Next
        </button>

        <button
          className="rounded bg-emerald-500 px-4 py-2 text-white"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>

      <p className="text-xs text-gray-500">
        Draft values: {JSON.stringify(formState.values)}
      </p>
    </div>
  );
}
