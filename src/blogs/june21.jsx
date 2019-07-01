import React, { Component } from "react";

class June21 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="blogcontainer">
          <div className="blogpost">
            <h4>June 21, 2019</h4>
            <p>
              So it occurred to me that I previously wrote about HOW I learned
              coding (Powershell), but not so much WHY.
            </p>
            <p>You, the astute reader and learner, aren't convinced.</p>
            <p>
              Let me start by introducing the concept of Object-Oriented
              Programming.
            </p>
            <p>
              For my SysAdmins of the world, let's take an Active Directory User
              as an example. That user has ALL sorts of attributes.
            </p>
            <p>
              And if you've ever had to mass update/delete/add to these
              attributes and your Active Directory was more than 20 people
              <br />
              you know how awful and boring of a task that can be.
            </p>
            <p>
              <strong>Enter Automation</strong>
            </p>
            <p>
              Powershell, and all object-oriented programming languages, deals
              with, well, objects. And these objects have properties.
            </p>
            <p>
              So let's say we had a need to dynamically set 150 users E-Mail
              attribute in AD, maybe because the UPN won't work since our domain
              ends with <br />
              .local. But the username portion is fine - we just need to append
              '@mydomain.com' to the end and set that in the E-Mail field.
            </p>
            <p>
              Powershell can grab every user out of your AD with a simple
              command like Get-ADUser.
            </p>
            <p>
              Once Powershell has a list of every Active Directory user and all
              of their attributes, we can instruct it to parse out the Username
              field.
            </p>
            <p>
              And then we can wrap that up by instructing Powershell to set the
              Active Directory user's mail field to be username+'mydomain.local'{" "}
              <br />
              with the Set-ADUser command.
            </p>
            <p>
              This whole command would look like{" "}
              <pre>
                <code>
                  <p>{`Get-ADUser -properties * -filter * | ForEach-Object {Set-ADUser -EmailAddress ($_.SamAccountName + "@mydomain.com") -Identity $_}`}</p>
                </code>
              </pre>
            </p>
            <p>
              Explained: Get-ADUser is getting every user, and every property of
              every user. After the |, each user is sent, one at a time, to the
              Set-ADUser <br /> command, where their email address is set to
              SamAccountName (the username property) + mydomain.com{" "}
            </p>
            <p>One line of code updated every user.</p>
            <p>
              Extrapolate that power of automation across all of your repetitive
              tasks. That's just one reason why you learn to code.
            </p>
            <p>
              <a href="https://knoxhutchinson.com">Return Home</a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default June21;
