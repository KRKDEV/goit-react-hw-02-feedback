import css from './app.module.css';
import Section from './Section/Section';
export const App = () => {
  return (
    <div className={css.container}>
      <Section title="Please leave feedback!">Test</Section>
      <Section title="Statistics">Test</Section>
    </div>
  );
};
