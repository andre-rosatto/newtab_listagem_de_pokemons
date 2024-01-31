import '../css/PageControls.css';

export default function PageControls({ currentPage, setCurrentPage, resultsCount }) {
	const handleInputChange = (e) => {
		const digits = e.target.value.match(/[0-9]+/g) ?? ['1'];
		const value = parseInt(digits.join(''));
		setCurrentPage(Math.min(Math.ceil(resultsCount / 10) - 1, Math.max(0, value - 1)));
	}

	return (
		<div className="PageControls">
			<div className="buttons-wrapper">
				<input
					type="button"
					value="<<"
					disabled={currentPage === 0}
					onClick={() => setCurrentPage(0)}
				/>
				<input
					type="button"
					value="<"
					disabled={currentPage === 0}
					onClick={() => setCurrentPage(currentPage - 1)}
				/>
			</div>
			<label>
				<input
					type="tel"
					value={currentPage + 1}
					onChange={handleInputChange}
					onFocus={(e) => e.target.select()}
				/> / {Math.ceil(resultsCount / 10)}
			</label>
			<div className="buttons-wrapper">
				<input
					type="button"
					value=">"
					disabled={currentPage === Math.ceil(resultsCount / 10) - 1}
					onClick={() => setCurrentPage(currentPage + 1)}
				/>
				<input
					type="button"
					value=">>"
					disabled={currentPage === Math.ceil(resultsCount / 10) - 1}
					onClick={() => setCurrentPage(Math.ceil(resultsCount / 10) - 1)}
				/>
			</div>
		</div>
	);
}