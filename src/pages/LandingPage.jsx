import React from 'react'

function landingPage() {
  return (
    <div>
      <p>landingPage Working</p>
      <a href='protected'>Protected Page Link</a>
      <div>
        <p>Working Iframe</p>
        <iframe src="https://www.youtube.com/embed/rncjTx-rRVc" title="Iframe Example" width="500" height="500"></iframe>
      </div>
      <div>
        <p>https://stackoverflow.com/a/27359037/12964268    xframe error on firefox.  On chrome CSP: frame-ancestor problem </p>
        <iframe id="test" src="https://x9rq0nl12x.labeling.us-east-1.sagemaker.aws/#/workstreams" title="Iframe Example" width="500" height="500"></iframe>
      </div>
    </div>
  )
}
// src='https://x9rq0nl12x.labeling.us-east-1.sagemaker.aws/#/workstreams' 

export default landingPage