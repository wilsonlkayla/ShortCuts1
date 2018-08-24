class Button extends React.Component {

    render() {
      const { 
        variant,
      } = this.props;
      
      return (
        <button className={variant} >
        </button>
      )
    }
  }
  
  React.render(
    <div>
      <Button content="Sample Button" variant="lavender" />
    </div>,
    document.getElementById('root')
  );