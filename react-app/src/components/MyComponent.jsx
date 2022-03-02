const MyComponent = ({ name, children }) => {
  //const { name, children } = props;
  return (
    <>
      안녕하세요, 제 이름은 {name}입니다.
      {children}
    </>
  );
};

export default MyComponent;
