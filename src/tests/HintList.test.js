import { queryByAltText, render } from "@testing-library/react";
import { HintList } from "../core/HintList"

describe('HintList tests case', () => {
  function getHint() {
    return render(
      <HintList 
        isLoad={true}
        allUsers={[
          {
            name: 'CatInEars',
            surname: 'catinears'
          },
          {
            name: 'Cortuzz',
            surname: 'cortuzz'
          }
        ]}
        searchText={''}
      />
    )
  }

  it('UserContainer should be have all data', () => {
    const { getByText, getAllByRole } = getHint();
    expect(getAllByRole('img').length).toBe(2);
    expect(getByText(/catinears/i)).toBeInTheDocument();
  })

  it('HintList should be have all users', () => {
    const { getAllByTestId } = getHint();
    const elementsContainer = getAllByTestId('user-container');
    expect(elementsContainer.length).toBe(2);
  })

});