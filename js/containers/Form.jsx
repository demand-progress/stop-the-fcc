import React, { Component } from 'react';
import { CONF, URLS } from '../config';
import { getQueryVariables } from '../utils';
import Responsive from 'react-responsive-decorator';


class Form extends Component {

    constructor(props) {
        super(props);

        this.state = getQueryVariables();
        this.state.submitted = false;
        this.state.countDown = 5;
        this.state.isMobile = false;
        this.onSubmit = this.onSubmit.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    componentDidMount(){
      this.props.media({ minWidth: 768 }, () => {
        this.setState({
          isMobile: false
        })
      })
      this.props.media({ maxWidth: 768 }, () => {
        this.setState({
          isMobile: true
        })
      })
    }

    render() {
      let modal = null;
      let topOfPage = null;
      let middle = null; 

      const header = (
        <div>   
          <div style={{color: 'white', lineHeight: 1.5}}>
            <strong style={{ fontSize: "25px" }}>
            The FCC voted to let Big Cable ruin the internet. But on Wednesday, May 16th, the Senate will vote on a resolution to overturn the FCC and restore net neutrality
            </strong>
              <br/><br/>
              <div>As of now, 50 senators have said they will vote ‘yes,’ and we need just 51 to guarantee victory. </div>
              <br/>
              <div>It’s go time! Contact Congress today.</div>
          </div>
        </div>
      )

      const form = (
        <div>
        <form id="signThePetition">
        <div className="flex">
          <input type="text" className="form-input" name="name" placeholder="Your Name" />
          <input type="email" className="form-input" name="email" placeholder="Your Email" />
        </div>
        <div className="flex">
          <input type="text" className="form-input" name="street" placeholder="Street Address" />
          <input type="text" className="form-input" name="zip" placeholder="Your Zipcode" />
        </div>
        <div className="flex">
          <button className="btn">
            <span>SIGN NOW</span>
          </button>
        </div>
      </form>
      <span><i>One or more of the participating organizations (listed at bottom) may email you about their campaigns.</i></span>
      <br/><br/>
      </div>
      )
      
      if(this.state.isMobile){
        topOfPage = form
        middle = header
        } else {
        topOfPage = header
        middle = form
      }

      if(this.state.submitted) {
        modal = (
              <div id="thanks" className="modal-wrapper-thanks modal-open-thanks" style={{ 'display' : this.state.submitted ? 'block' : 'none'}}>
              <div className="modal-thanks">
                <a className="close-thanks" href="#" onClick={ this.closeModal }>×</a>
                <header>
                  <h2 id="modal-header-thanks" style={{ fontFamily: 'Montserrat, sans-serif'}}>Thanks for signing.</h2>
                </header>
                <article style={{}}>
                  <p>
                    <p className="header-thanks" style={{ fontFamily: 'Montserrat, sans-serif', textDecorationLine: "underline"}}>
                    Please call Congress and tell your lawmakers to overturn the FCC and restore net neutrality:  
                  </p>
                </p>
                  <p id="call" style={{ marginTop: '0.5em', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>Call Now: <a style={{color: 'black'}}href="tel:8582640403">858-264-0403</a></p>
                  <p>
                    <br/>
                    <p style={{fontSize: '14px', fontFamily: 'Montserrat, sans-serif'}}>We’ll connect you to your lawmakers.  You can use this script — just introduce yourself, be polite, and say: <i>"I support Title Two net neutrality and I urge you to vote for the ‘resolution of disapproval’ to restore net neutrality."</i></p>
                    <br/>
                    <p className="header-thanks" style={{ fontFamily: 'Montserrat, sans-serif', textDecorationLine: "underline"}}>
                    Attend an event on Monday: 
                    </p>
                    <br/>
                    <p style={{fontSize: '14px', fontFamily: 'Montserrat, sans-serif'}}>On May 14th, activists across the country will be gathering outside of the offices of key lawmakers.  Please sign up for an event near you here (or consider hosting one if there isn't one near you yet):</p>
                    <br/>
                    <a style={{ fontFamily: 'Montserrat, sans-serif'}} id="modal-battle-link" href="https://events.battleforthenet.com" target="_blank">https://events.battleforthenet.com</a>
                  </p>
                </article>
              </div>
            </div>
        )
      }

      if(this.state.mobile){

      }
      
        return (
          <div className="bftn-form call-action-form" onSubmit={ this.onSubmit }>
            <h3>Red Alert:</h3>
            <h3>Tell the Senate to Restore Net Neutrality!</h3>
            <br/><br/>
            {topOfPage}
            {middle}
            {modal}
        </div>);
    }

    closeModal(evt) {
      evt.preventDefault();
      this.setState({ submitted: false });
    }

    onSubmit(evt) {
        evt.preventDefault();

        const form = evt.target;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        const name = form.name;
        if (!name.value.trim()) {
            name.focus();
            alert('Please enter your name.');
            return;
        }


        const email = form.email;
        if (!email.value.trim()) {
            email.focus();
            alert('Please enter your email.');
            return;
        } else if (!emailRegex.test(email.value.trim())) {
            email.focus();
            alert('Please enter a valid email.');
            return;
        }

        const address1 = form.street;
        if (!address1.value.trim()) {
            address1.focus();
            alert("Please enter your address.");
            return;
        }

        const zip = form.zip;
        if (!zip.value.trim()) {
            zip.focus();
            alert('Please enter your Zipcode.');
            return;
        } else if (zip.value.length < 5 || zip.value.length > 5) {
            zip.focus();
            alert('Please enter a valid Zipcode.');
            return;
        }

        const fields = {
            'action_user_agent': navigator.userAgent,
            'country': 'United States',
            'email': email.value.trim(),
            'form_name': 'act-petition',
            'js': 1,
            'name': name.value.trim(),
            'address1': address1.value.trim(),
            'zip': zip.value.trim(),
            'opt_in': 1,
            'page': CONF.actionKitPageShortName,
            'source': this.state.source || 'website',
            'want_progress': 1
        };

       
        this.sendFormToActionKit(fields);
    }

    sendFormToActionKit(fields) {
        // iFrame
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.setAttribute('name', 'actionkit-iframe');
        document.body.appendChild(iframe);

        // Form
        const form = document.createElement('form');
        form.style.display = 'none';
        form.setAttribute('action', URLS.actionKit);
        form.setAttribute('method', 'post');
        form.setAttribute('target', 'actionkit-iframe');
        document.body.appendChild(form);

        Object.keys(fields).forEach(function(key) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = fields[key];
            form.appendChild(input);
        });

        form.submit()
        this.setState({ submitted: true });
    }

}

export default Responsive(Form);