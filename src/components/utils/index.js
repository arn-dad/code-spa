import React from 'react';
import { Placeholder, Image, Loader as SemanticLoader } from 'semantic-ui-react';

export const CustomPlaceholder = () => (
  <div style={{ padding: '0 0 15px 0' }}>
    <Placeholder>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
    </Placeholder>
  </div>
);

export const PlaceholderImage = () => (
  <Placeholder style={{ height: '100%', width: '100%' }}>
    <Placeholder.Image />
  </Placeholder>
);

export const PlaceholderContect = () => (
  <div style={{ width: '80%', margin: 'auto', marginTop: '15px' }}>
    <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
  </div>
);

export const PlaceholderFluid = () => (
  <Placeholder fluid>
    <Placeholder.Header image>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>
);

export const Loader = (props) => {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
   return (
     <div>
        <SemanticLoader style={style} size={props.size} active inline="centered" />
     </div>
   )
  };

  export const LoaderAsync = (props) => {
    const style = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    if (props.error) {
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } 
     return (
       <div>
          <SemanticLoader active inline="centered" />
       </div>
     )
    };
  