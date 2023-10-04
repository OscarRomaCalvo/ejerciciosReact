import "./index.css"

function BotonUp(){

    const scrollToTop = () => {
        /*window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });*/
        const fullPageElement = document.querySelector('.fullPage');
        fullPageElement.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

      return (
        <button onClick={scrollToTop}>
          Ir arriba
        </button>
      )
}

export default BotonUp