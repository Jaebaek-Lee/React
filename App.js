import logo from './logo.svg';
import './App.css';

function Header(props) { //component, function type. (property = objcet that include props)
  // console.log('props', props, props.title)
  return ( //------JSX
    <header><h1><a href = "/" onClick = {event => {event.preventDefault();
    props.onChangeMode();}}>{props.title}</a></h1></header> //{jscode in jsx tag}
  );//------
}

function Nev(props) {
  console.log('props', props.topics)
  const list = []
  for (let i = 0; i < props.topics.length; ++i) {
    let t = props.topics[i];
    list.push(<li key = {t.id}><a id = {t.id} href = {'/read/'+t.id} onClick = {event => {event.preventDefault();
    props.onChangeMode(event.target.id);}}>{t.title}</a></li>)
  }
  return (
    <nav>
      <ol>
        {list}
      </ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [{id:1, title:'HTML', body:'HTML is ...'},
                  {id:2, title:'CSS', body:'CSS is ...'},
                  {id:3, title:'Javascript', body:'Javascript is ...'}
                ]
  return (
    <div>
      <Header title = "Web" onChangeMode = {() => {alert('Header');}}></Header>
      <Nev topics = {topics} onChangeMode = {(id) => {alert(id);}}></Nev>
      <Article title = "Welcome" body = "Hello, React"></Article>
    </div>
  );
}

export default App;
