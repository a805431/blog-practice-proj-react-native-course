import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

//rather than directly exporting the app, created with createAppContainer
//it is wrapped inside a custom component
//this component can also be wrapped
const App = createAppContainer(navigator);

//here a custom component is being exported
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
