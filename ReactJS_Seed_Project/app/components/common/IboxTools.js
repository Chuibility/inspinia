import React from 'react';

class IboxTools extends React.Component {

    collapsePanel(e) {
        e.preventDefault();
        var element = $(e.target);
        var ibox = element.closest('div.ibox');
        var button = element.closest("i");
        var content = ibox.find('div.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    }

    closePanel(e) {
        e.preventDefault();
        var element = $(e.target);
        var content = element.closest('div.ibox');
        content.remove();
    }

    render() {
        return (
            <div className="ibox-tools">
                <a className="collapse-link" onClick={this.collapsePanel}>
                    <i className="fa fa-chevron-up"></i>
                </a>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i className="fa fa-wrench"></i>
                </a>
                <ul className="dropdown-menu dropdown-user">
                    <li><a href="#">Config option 1</a>
                    </li>
                    <li><a href="#">Config option 2</a>
                    </li>
                </ul>
                <a className="close-link" onClick={this.closePanel}>
                    <i className="fa fa-times"></i>
                </a>
            </div>
        )
    }
}

export default IboxTools