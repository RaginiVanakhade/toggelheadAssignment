import "../style/MegaMenu.css";

const MegaMenu = ({ data }) => {
  if (!data) return null;

  return (
    <div className="mega-menu">
      <div className="mega-content">
        {data.map((section, index) => (
          <div className="mega-column" key={index}>
            <h3>{section.title}</h3>

            <ul>
              {section.items.map((item, i) => (
                <li key={i}>
                  <a href="/">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;