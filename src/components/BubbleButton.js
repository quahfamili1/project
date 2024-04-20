const BubbleButton = (data) => {
  function onClick() {
    // Your click handler logic here
  }

  return (
    <div
      className="bubble-button"
      role="button"
      tabIndex={0}
      onClick={onClick}
    ></div>
  );
};

export default BubbleButton;
