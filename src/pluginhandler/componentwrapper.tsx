import * as React from "react";
import * as Semantic from "semantic-ui-react";
import * as PH from "processhub-sdk";
import * as Plugin from "../plugin";

class LocalProps  {
  component: string;
  params: any;
}

interface LocalState {
  Component?: any;
  environment: any;
}

export class ComponentWrapper extends React.Component<LocalProps, LocalState> {

  
  constructor(props: LocalProps) {
    super(props);
    this.state = {
      Component: null,
      environment: null
    };
  }

  public async componentWillMount(): Promise<void> {
    console.log(this.props.params);

    let ah = new PH.FrameActionHandler("plugin3", "TestComponentView");
    let env = await ah.getEnvironment();

    let phEnv = {
      actionHandler: ah,
      ...env
    };
    
    this.setState( { 
      Component: Plugin["TestComponentView"],
      environment: phEnv });
  }

  public render(): JSX.Element {
    const { Component } = this.state;
    if (Component == null)
        return <span>Loading...</span>;

    return (<Semantic.Message>
      <Component phEnvironment={ this.state.environment} />
                             
      </Semantic.Message>);
    }

}