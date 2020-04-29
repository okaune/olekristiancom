import React from 'react';
import styled from 'styled-components';

const ResumeBlockWrapper = styled.div`
    margin: 1rem 0;
`;

const ResumeBlockPre = styled.p`
    font-size: 0.75rem;
    color: var(--primary);
    text-transform: uppercase;
`;

const ResumeBlockTitle = styled.h3``;

const ResumeBlockDescription = styled.p`
    margin: 0;
`;

interface dataProps {
    location?: string;
    period?: string;
    title?: string;
    description?: string;
}

const ResumeBlock: React.FC<{ data: dataProps }> = (props) => (
    <ResumeBlockWrapper>
        {(props.data.location || props.data.period) && (
            <ResumeBlockPre>
                {props.data.location}
                {props.data.location && props.data.period && (
                    <React.Fragment>
                        &nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;
                    </React.Fragment>
                )}
                {props.data.period}
            </ResumeBlockPre>
        )}
        {props.data.title && (
            <ResumeBlockTitle>{props.data.title}</ResumeBlockTitle>
        )}
        {props.data.description && (
            <ResumeBlockDescription>
                {props.data.description}
            </ResumeBlockDescription>
        )}
    </ResumeBlockWrapper>
);

export default React.memo(ResumeBlock);
