import Counter from "./state-ref/components/Counter";
import AutoFocusInput from "./state-ref/components/AutoFocusInput";
import CounterWithRef from "./state-ref/components/CounterWithRef";

import FeedbackForm from "./messy/FeedbackForm";

import ControlledFeedbackForm from "./controlled/ControlledFeedbackForm";

import UncontrolledFeedbackForm from "./uncontrolled/UncontrolledFeedbackForm";

import UncontrolledFormNoRef from "./uncontrolled/UncontrolledFormNoRef";
import ControlledContactForm from "./controlled/ControlledContactForm";
import UncontrolledContactFormref from "./uncontrolled/UncontrolledContactFormref";
import UncontrolledContactformNoref from "./uncontrolled/UncontrolledContactformNoref";

function App() {
  return (
    <div className="flex flex-col items-center">
      {/* <Counter /> */}
      {/* <AutoFocusInput /> */}
      {/* <CounterWithRef /> */}

      {/* <FeedbackForm /> */}

      {/* <ControlledFeedbackForm /> */}

      {/* <UncontrolledFeedbackForm /> */}

      {/* <UncontrolledFormNoRef /> */}

      <ControlledContactForm />
      <UncontrolledContactFormref />
      <UncontrolledContactformNoref />
    </div>
  );
}

export default App;
