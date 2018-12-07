import React, {Component} from 'react';

class Error extends Component {
  render() {
    return (
      <React.Fragment>
        <style type={"text/css"}>
          {'@import url(\'https://fonts.googleapis.com/css?family=Montserrat:200,400,700\');\n' +
          '\n' +
          '\n' +
          '#notfound {\n' +
          '    position: relative;\n' +
          '    height: 100vh;\n' +
          '}\n' +
          '\n' +
          '#notfound .notfound {\n' +
          '    position: absolute;\n' +
          '    left: 50%;\n' +
          '    top: 50%;\n' +
          '    -webkit-transform: translate(-50%, -50%);\n' +
          '    -ms-transform: translate(-50%, -50%);\n' +
          '    transform: translate(-50%, -50%);\n' +
          '}\n' +
          '\n' +
          '.notfound {\n' +
          '    max-width: 520px;\n' +
          '    width: 100%;\n' +
          '    line-height: 1.4;\n' +
          '    text-align: center;\n' +
          '}\n' +
          '\n' +
          '.notfound .notfound-404 {\n' +
          '    position: relative;\n' +
          '    height: 200px;\n' +
          '    margin: 0px auto 20px;\n' +
          '    z-index: -1;\n' +
          '}\n' +
          '\n' +
          '.notfound .notfound-404 h1 {\n' +
          '    word-break: keep-all;\n' +
          '    font-family: \'Montserrat\', sans-serif;\n' +
          '    font-size: 236px;\n' +
          '    font-weight: 200;\n' +
          '    margin: 0px;\n' +
          '    color: #211b19;\n' +
          '    text-transform: uppercase;\n' +
          '    position: absolute;\n' +
          '    left: 50%;\n' +
          '    top: 50%;\n' +
          '    -webkit-transform: translate(-50%, -50%);\n' +
          '    -ms-transform: translate(-50%, -50%);\n' +
          '    transform: translate(-50%, -50%);\n' +
          '}\n' +
          '\n' +
          '.notfound .notfound-404 h2 {\n' +
          '    font-family: \'Montserrat\', sans-serif;\n' +
          '    font-size: 28px;\n' +
          '    font-weight: 400;\n' +
          '    text-transform: uppercase;\n' +
          '    color: #211b19;\n' +
          '    background: #fff;\n' +
          '    padding: 10px 5px;\n' +
          '    margin: auto;\n' +
          '    display: inline-block;\n' +
          '    position: absolute;\n' +
          '    bottom: 0px;\n' +
          '    left: 0;\n' +
          '    right: 0;\n' +
          '}\n' +
          '\n' +
          '.notfound a {\n' +
          '    font-family: \'Montserrat\', sans-serif;\n' +
          '    display: inline-block;\n' +
          '    font-weight: 700;\n' +
          '    text-decoration: none;\n' +
          '    color: #fff;\n' +
          '    text-transform: uppercase;\n' +
          '    padding: 13px 23px;\n' +
          '    background: #ff6300;\n' +
          '    font-size: 18px;\n' +
          '    -webkit-transition: 0.2s all;\n' +
          '    transition: 0.2s all;\n' +
          '}\n' +
          '\n' +
          '.notfound a:hover {\n' +
          '    color: #ff6300;\n' +
          '    background: #211b19;\n' +
          '}\n' +
          '\n' +
          '@media only screen and (max-width: 767px) {\n' +
          '    .notfound .notfound-404 h1 {\n' +
          '        font-size: 148px;\n' +
          '    }\n' +
          '}\n' +
          '\n' +
          '@media only screen and (max-width: 480px) {\n' +
          '    .notfound .notfound-404 {\n' +
          '        height: 148px;\n' +
          '        margin: 0px auto 10px;\n' +
          '    }\n' +
          '    .notfound .notfound-404 h1 {\n' +
          '        font-size: 86px;\n' +
          '    }\n' +
          '    .notfound .notfound-404 h2 {\n' +
          '        font-size: 16px;\n' +
          '    }\n' +
          '    .notfound a {\n' +
          '        padding: 7px 15px;\n' +
          '        font-size: 14px;\n' +
          '    }\n' +
          '}\n'}
        </style>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>Oops!</h1>
              <h2>501 Not authorized. Please login and try again.</h2>
            </div>
            <a href="/">Go to Homepage</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Error.propTypes = {
};
Error.defaultProps = {};

export default Error;
