import type { ReactNode } from 'react';

const FormRow = ({ children }: { children: ReactNode }) => {
  return (
    <div className="form-row">
      <div className="form-group col">{children}</div>
    </div>
  );
};

export default FormRow;
