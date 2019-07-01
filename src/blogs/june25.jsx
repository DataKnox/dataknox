import React, { Component } from "react";

class June25 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="blogcontainer">
          <div className="blogpost">
            <h4>June 25 - vSphere or Hyper-V</h4>
            <p>Ugh. Please don't ask me to answer that.</p>
            <p>A bar fight ensues...</p>
            <p>
              You either love vSphere and hate Hyper-V, or vice versa. There's
              almost never a level-headed argument over these two.
            </p>
            <p>
              I learned vSphere first - let me say that. I watched Keith
              Barker's course on CBT Nuggets, and certainly appreciated ESXI's
              "free-ness".
            </p>
            <p>
              And I'll acknowledge there is a free Hyper-V edition, too, before
              I go ahead and say that if a gun is to my head, I'll take Hyper-V.
            </p>
            <p>
              <strong>I'm not saying I don't like vSphere.</strong> Don't send
              the hate mail.
            </p>
            <p>
              It's just that in my opinion, for any newcomer to I.T., I'll
              always recommend they learn Hyper-V first for a few reasons.
            </p>
            <ol>
              <li>
                It's a familiar GUI. Windows Server is Windows, after all. You
                know where task manager is, event viewer, etc.
              </li>
              <li>
                It uses Windows-y technologies. VHDXs are stored on drives, and
                are explorable in Windows Explorer.
              </li>
              <li>
                Storage is easier to configure and manipulate in Windows Server,
                like iSCSI for example. Important for clustering.
              </li>
              <li>
                The features and licensing are straight forward. You don't need
                special licensing to unlock beefy Hyper-V features <br /> except
                something like Storage Replica
              </li>
            </ol>
            <p>
              Now at the end of the day, both of these things do the same thing.
              (You can even use Powershell to automate both!)
            </p>
            <p>
              So if you're new to I.T., or are looking to jump up a tier in job
              duties, let me show you where you can learn both:
            </p>
            <ul>
              <li>
                <a
                  href="https://www.cbtnuggets.com/learn/it-training/vmware-vsphere-6-vcp6-5-dcv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VMWare VCP Training
                </a>
              </li>
              <li>
                <a
                  href="https://www.cbtnuggets.com/learn/it-training/microsoft-windows-server-2016-70-740-installation-storage-and-compute"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Hyper-V Training
                </a>
              </li>
            </ul>
            <p>
              <a href="https://knoxhutchinson.com" rel="noopener noreferrer">Return Home</a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default June25;
