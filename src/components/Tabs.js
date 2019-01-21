import React, {Component} from 'react'

class Tabs extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeTabIndex: this.props.defaultActiveTabIndex ? this.props.defaultActiveTabIndex : 0,
            isMobile: window.innerWidth <= 680
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
      }

    handleWindowResize = () => {
        this.setState({
            isMobile: window.innerWidth <= 680
        });
    }    
  
    // Toggle currently active tab
    handleTabClick(index) {
        this.setState({
            activeTabIndex: index
        });
    }
  
    // Encapsulate <Tabs/> component API as props for <Tab/> children
    renderChildrenWithTabsApiAsProps() {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                onClick: this.handleTabClick.bind(this, index),
                isActive: index === this.state.activeTabIndex
            });
        });
    }
  
    // Render current active tab content
    renderActiveTabContent() {
        const {children} = this.props;
        const {activeTabIndex} = this.state;
        if(children[activeTabIndex]) {
            return children[activeTabIndex].props.children;
        }
    }

    renderMobileContent() {
        return React.Children.map(this.props.children, (child, index) => {
            const button = React.cloneElement(child, {
                disabled: true
            })
            return React.createElement(
                'div', 
                {
                    className: 'resume__content--mobile'
                }, 
                [button, ...child.props.children]
            )
            
        })
    }
  
    render() {
        const { isMobile } = this.state;
        return (
            isMobile ?
                (
                    <React.Fragment>
                        {this.renderMobileContent()}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <nav className="resume__navigation">
                            {this.renderChildrenWithTabsApiAsProps()}
                        </nav>
                        <div className="resume__content">
                            {this.renderActiveTabContent()}
                        </div>
                    </React.Fragment>
                ) 
        );
    }
}

export default Tabs