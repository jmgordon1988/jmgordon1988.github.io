import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions at jmgordon1988@gmail.com or at the links below
              </p>
            </div>
          </div>
          {/* <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>LinkedIn :
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div> */}
        </section>
        );
  }
}
