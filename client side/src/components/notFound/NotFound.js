import React from 'react'
import { useHistory } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
     const history = useHistory()
  return (
    <>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
<section className="error-page section">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 offset-lg-3 col-12">
				{/* <!-- Error Inner --> */}
				<div className="error-inner">
					<h1>404<span>Oop's  sorry we can't find that page!</span></h1>
					<p>Aenean eget sollicitudin lorem, et pretium felis. Nullam euismod diam libero, sed dapibus leo laoreet ut. Suspendisse potenti. Phasellus urna lacus</p>
					<button className='btn btn-primary ' onClick={()=> history.push('/')}>Back to Home</button>
				</div>
				{/* <!--/ End Error Inner --> */}
			</div>
		</div>
	</div>
</section></>
  )
}
