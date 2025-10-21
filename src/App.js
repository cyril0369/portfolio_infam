import AcceuilMenu from './components/acceuil_menu.jsx'
import AcceuilMain from './components/acceuil_main.jsx';
import Cursor from './components/cursor.jsx';

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e =>{
    cursor.setAttribute('style', 'top:'+(e.pageY - 5)+
    "px; left:"+(e.pageX - 5)+"px;"
    )
})

function App() {
  return (
    <div className="App">
      <Cursor/>
      <AcceuilMenu/>
      <AcceuilMain/>
    </div>
  );
}

export default App;
