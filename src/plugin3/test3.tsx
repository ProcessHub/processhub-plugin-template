import * as React from "react";
// Sobald Semantic genutzt wird steigt Packagegröße um 1.5 MB
// import * as Semantic from "semantic-ui-react";
import * as PH from "processhub-sdk";

class LocalProps implements PH.PluginProperties {
  actionHandler: PH.IActionHandler;
  user: string;
}

interface LocalState {
}

export class Test3 extends React.Component<LocalProps, LocalState> {

  constructor(props: LocalProps) {
    super(props);
  }

  public async componentWillMount(): Promise<void> {
    let ah = new PH.FrameActionHandler("plugin3", "Test3");
    console.log("PROM: " + (await ah.getProcessDetails("ANFRAGE")).processId);
  }

  public render(): JSX.Element {
      return (<div>
        <h2>Test3.1</h2>  
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>    
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>            
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>
        dsfgsdfgsdfgsdfg <br/>                                
      </div>);
    }

}