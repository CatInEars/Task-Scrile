import { fireEvent, render } from '@testing-library/react';
import { CustomInput } from '../core/CustomInput';

describe('CustomInput tests case', () => {
  const { getByTestId } = render(<CustomInput />);
  const inputElement = getByTestId('search-input');

  it('CustomInput should be render correct', () => {
    expect(inputElement).toBeInTheDocument();
  })

  it('CustomInput should be have correct default value', () => {
    expect(inputElement).toHaveDisplayValue('')
  })

  it('CustomInput should be change value', () => {
    fireEvent.change(inputElement, {
      target: {
        value: 'CatInEars'
      }
    });
    expect(inputElement).toHaveDisplayValue('CatInEars')
  })
})