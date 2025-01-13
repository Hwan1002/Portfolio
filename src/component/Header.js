const Header = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <header className='header'>
          <div className='container'>
            <button className='logo'>Hwan's Portfolio</button>
            <nav className='navBar'>
              <button onClick={() => scrollToSection('about')}>About Me</button>
              <button onClick={() => scrollToSection('skills')}>Skills</button>
              <button onClick={() => scrollToSection('archiving')}>Archiving</button>
              <button onClick={() => scrollToSection('project')}>Projects</button>
              <button onClick={() => scrollToSection('career')}>Career</button>
            </nav>
          </div>
        </header>
    )
}
export default Header;