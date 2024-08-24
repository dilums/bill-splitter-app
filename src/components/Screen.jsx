export default function Screen({ children, className }) {
    return (
      <>
        <div
          className={`bg-[#48426d] screen-shadow w-80 h-[640px]  p-7 rounded-3xl ${className}`}
        >
          {children}
        </div>
      </>
    );
  }