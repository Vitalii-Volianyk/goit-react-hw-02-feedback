import { Component } from 'react';
import css from './App.module.css';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import Section from 'components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = option => {};
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state.values}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
      </>
    );
  }
}

export default App;
