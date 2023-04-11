import css from './app.module.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
export const App = () => {
  return (
    <div className={css.container}>
      <Section title="Please leave feedback!">
        <FeedbackOptions></FeedbackOptions>
      </Section>
      <Section title="Statistics">Test</Section>
    </div>
  );
};
