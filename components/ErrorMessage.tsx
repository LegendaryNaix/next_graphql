export default function ErrorMessage({ message }: { message: string }) {
	return <div className="form-control btn-danger">{message}</div>;
}
