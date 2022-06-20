interface IProps {
  message: string;
}

const FormError = ({ message }: IProps) => {
  return <div className="text-red-700"> {message}</div>;
};
export default FormError;
