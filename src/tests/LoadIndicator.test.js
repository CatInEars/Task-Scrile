import { fireEvent, queryByTestId, render } from "@testing-library/react";
import { App } from "../core/App";
import { HintList } from "../core/HintList";

describe('LoadIndicator tests case', () => {
  it('LoadIndicator should be hide before write', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('load-icon')).not.toBeInTheDocument();
  })

  it('LoadIndicator should be showed', () => {
    const { getByTestId } = render(<App />);
    const inputElement = getByTestId('search-input');
    fireEvent.change(inputElement, {
      target: {
        value: 'Test text'
      }
    });
    expect(getByTestId('load-icon')).toBeInTheDocument();
  })

  it('LoadIndicator should be hide after get data', () => {
    // isLoad state set true only before get Data then if hintList if show data is load
    const { queryByTestId } = render(<HintList isLoad={true} allUsers={[]}/>);
    expect(queryByTestId('load-icon')).not.toBeInTheDocument();
  });
})
