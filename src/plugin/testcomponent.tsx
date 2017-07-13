import * as React from "react";
// Sobald Semantic genutzt wird steigt Packagegröße um 1.5 MB
import * as Semantic from "semantic-ui-react";
import * as PH from "processhub-sdk";

class LocalProps {
  phEnvironment: any;
}

interface LocalState {
}

export class TestComponentView extends React.Component<LocalProps, LocalState> {

  constructor(props: LocalProps) {
    super(props);
  }

  public render(): JSX.Element {
      return (<div>
        <h2>TestPlugin Komponente</h2> 
        Environment.currentProcess.displayName = { this.props.phEnvironment.currentProcess.displayName }                           
      </div>);
    }

}