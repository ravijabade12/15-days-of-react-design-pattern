import FormFields from "./components/FormFields";
import FormWizard from "./components/FormWizard";
import Toggle from "./components/Toggle";
import { FormProvider } from "./provider/FormProvider";
import { customFormReducer } from "./reducers/form-reducer";
import { createWizardReducer } from "./reducers/form-wizard";
import { customToggleReducer } from "./reducers/toggle-reducer";

const customWizardReducer = createWizardReducer((step, values) => {
  if (step === 0) return values.name?.trim().length > 0;
  if (step === 1) return values.email?.includes("@");
  return true;
});

function App() {
  return (
    <div className="flex flex-col items-center m-8 space-y-4">
      <Toggle reducer={customToggleReducer} onToggle={(v) => console.log(v)} />

      <FormProvider reducer={customFormReducer}>
        <FormFields />
        <FormWizard />
        <FormWizard reducer={customWizardReducer} />
      </FormProvider>
    </div>
  );
}

export default App;
