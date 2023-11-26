import { render, screen } from '@testing-library/react';
import QuizChoice from '../components/quiz/QuizChoice';


describe('Data is passed to the component', () => {
  test('Mockdata id a is passed and rendered', () => {
    const mockData = {
      id: 'a',
      label: 'Hyper Mouse Lightning',
      checked: false,
      onChange: () => {},
    };
  
    render(<QuizChoice {...mockData} />);
    
    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeInTheDocument();
    expect(radioInput).toHaveAttribute('id', mockData.id);
    expect(radioInput).toHaveAttribute('value', mockData.id);
    expect(radioInput).toHaveAttribute('name', 'answer');
    expect(radioInput).not.toHaveAttribute('checked');
    
    const label = screen.getByText(mockData.label);
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', mockData.id);
  });
  
  test('Mockdata id c is passed and rendered', () => {
    const mockData = {
      id: 'c',
      label: 'Hypertext Markup Language',
      checked: false,
      onChange: () => {},
    };
  
    render(<QuizChoice {...mockData} />);
    
    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeInTheDocument();
    expect(radioInput).toHaveAttribute('id', mockData.id);
    expect(radioInput).toHaveAttribute('value', mockData.id);
    expect(radioInput).toHaveAttribute('name', 'answer');
    expect(radioInput).not.toHaveAttribute('checked');
    
    const label = screen.getByText(mockData.label);
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', mockData.id);
    });
})

