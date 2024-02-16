import { render, screen } from '@testing-library/react';
import { Application } from './Application';

describe('Application component', () => {
  test('renders', () => {
    render(<Application />);

    // const pageHeading = screen.getByRole('heading', {
    //   name: 'Job application form',
    // });

    //if same role is in different element like heading youcan use level option
    const pageHeading = screen.getByRole('heading', {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    // const sectionHeading = screen.getByRole('heading', {
    //   name: 'Section 1',
    // });
    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    //getByRole
    //if there is same role in another element then use name option
    const nameElement = screen.getByRole('textbox', { name: 'Name' });
    expect(nameElement).toBeInTheDocument();

    //getByLabelText
    // const nameElement_2 = screen.getByLabelText('Name');
    // expect(nameElement_2).toBeInTheDocument();

    //if there is same name lebel text then option will be selector
    const nameElement_3 = screen.getByLabelText('Name', { selector: 'input' });
    expect(nameElement_3).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', { name: 'Bio' });
    expect(bioElement).toBeInTheDocument();

    const jobLocation = screen.getByRole('combobox');
    expect(jobLocation).toBeInTheDocument();

    const checkBoxElement = screen.getByRole('checkbox');
    expect(checkBoxElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
