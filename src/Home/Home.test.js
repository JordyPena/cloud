import { configure, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Home from '../Home/Home';
configure({ adapter: new Adapter() });

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  })
}))

describe('Home component button tests', () => {
  const wrapper = shallow(<Home/>)
  it('home button clicked', () => {
    wrapper.find('#home-button').simulate('click');
    
  })

  it('should navigate to landing page when click on dive right in button', () => {
    wrapper.find('#home-button').simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('/landingPage')
  })
})