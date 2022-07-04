// Test -------------------------- Importing the Packages ---------------------------------

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
type HeadingProps = {
  className: string;
  children: React.ReactNode;
};

// Test -------------------------- The current component ----------------------------------
const Heading = ({ className, children }: HeadingProps) => {
  return <div className={`${className}`}>{children}</div>;
};

// Test -------------------------- Exporting the current component ------------------------
export default Heading;
