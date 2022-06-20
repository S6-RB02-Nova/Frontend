interface IProps {
  buttonText: string;
}

const SubmitButton = ({ buttonText }: IProps) => {
  return (
    <div className="form-group">
      <button
        type="submit"
        className="w-full p-3 mt-4 text-center text-white cursor-pointer bg-fuchsia-800"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SubmitButton;
