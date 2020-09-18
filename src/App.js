import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';

import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

function App () {
  return (
    <View activePanel="main">
      <Panel id="main">
        <PanelHeader>VKUI</PanelHeader>
        <Group header={<Header mode="secondary">Items</Header>}>
          <Cell>Hello</Cell>
         <Cell>World</Cell>
       </Group>
    </Panel>
   </View>
 );
}

//const App = () => {
	//const [activePanel, setActivePanel] = useState('home');
	//const [fetchedUser, setUser] = useState(null);
	//const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	//useEffect(() => {
	//	bridge.subscribe(({ detail: { type, data }}) => {
	//		if (type === 'VKWebAppUpdateConfig') {
	//			const schemeAttribute = document.createAttribute('scheme');
	//			schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
	//			document.body.attributes.setNamedItem(schemeAttribute);
	//		}
	//	});
	//	async function fetchData() {
	//		const user = await bridge.send('VKWebAppGetUserInfo');
	//		setUser(user);
	//		setPopout(null);
	//	}
	//	fetchData();
	//}, []);

	//const go = e => {
		//setActivePanel(e.currentTarget.dataset.to);
	//};

	//return (
	//	<View activePanel={activePanel} popout={popout}>
	//		<Home id='home' fetchedUser={fetchedUser} go={go} />
	//		<Persik id='persik' go={go} />
	//	</View>
	///);
//}


//export default App;
ReactDOM.render(<App />, document.getElementById('root'));

