import Button from '../../components/Button/Button';

const HomePage = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <div>
        <h1>Button Examples</h1>

        <h2>Primary Button</h2>
        <Button text="Primary Button" onClick={handleClick} />

        <h2>Secondary Button</h2>
        <Button text="Secondary Button" onClick={handleClick} skin="secondary" />

        <h2>Disabled Button</h2>
        <Button text="Disabled Button" isDisabled onClick={handleClick} />
        <Button text="Secondary Button" isDisabled onClick={handleClick} skin="secondary" />

        <h2>Loading Button</h2>
        <Button text="Loading Button" isLoading onClick={handleClick} />
        <Button text="Secondary Button" isLoading onClick={handleClick} skin="secondary" />

        <h2>Full Width Button</h2>
        <Button text="Full Width Button" isFullWidth onClick={handleClick} />

        <h2>Combined States</h2>
        <Button text="Disabled Loading Button" isDisabled isLoading onClick={handleClick} />
        <Button
          text="Secondary Button"
          isDisabled
          isLoading
          onClick={handleClick}
          skin="secondary"
        />
        <Button
          text="Secondary Full Width Button"
          skin="secondary"
          isFullWidth
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default HomePage;
