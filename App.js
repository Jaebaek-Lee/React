import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props) { //component, function type. (property = objcet that include props)
  // console.log('props', props, props.title)
  return ( //------JSX
    <header>
      <h1>
        <a href = "/" onClick = {(event) => {
        event.preventDefault();
        props.onChangeMode();}}>
        {props.title}
        </a>
      </h1>
    </header> //{jscode in jsx tag}
  );//------
}

function Nav(props) {
  console.log('props', props.topics)
  const list = []
  for (let i = 0; i < props.topics.length; ++i) {
    let t = props.topics[i];
    list.push(<li key = {t.id}><a id = {t.id} href = {'/read/'+t.id} onClick = {event => {event.preventDefault();
    props.onChangeMode(Number(event.target.id));}}>{t.title}</a></li>)
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
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [{id:1, title:'HTML', body:'HTML is ...'},
                  {id:2, title:'CSS', body:'CSS is ...'},
                  {id:3, title:'Javascript', body:'Javascript is ...'}
                ];
  let content = null;
  if (mode == 'WELCOME') {
    content = <Article title = "Welcome" body = "Hello, JaeBaek."></Article>
  }
  else if (mode == 'READ') {
    let title, body = null;
    for(let i = 0; i < topics.length; ++i) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title = {title} body = {body}></Article>
  }                

  return (
    <div>
      <Header title = "WEB" onChangeMode = {() => {setMode('WELCOME');}}></Header>
      <Nav topics = {topics} onChangeMode = {(id) => {setMode('READ'); setId(id);}}></Nav>
      {/* setmode하면 다시 앞으로 돌아가나? ㅇㅇ 리턴 밖만.*/}
      {content}
    </div>
  );
}

export default App;
