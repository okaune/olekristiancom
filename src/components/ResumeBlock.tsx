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

interface Props {
    data: dataProps;
}

const ResumeBlock: React.FC<Props> = ({
    data: { location, period, title, description },
}) => (
    <ResumeBlockWrapper>
        {(location || period) && (
            <ResumeBlockPre>
                {location}
                {location && period && (
                    <React.Fragment>
                        &nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;
                    </React.Fragment>
                )}
                {period}
            </ResumeBlockPre>
        )}
        {title && <ResumeBlockTitle>{title}</ResumeBlockTitle>}
        {description && (
            <ResumeBlockDescription>{description}</ResumeBlockDescription>
        )}
    </ResumeBlockWrapper>
);

export default React.memo(ResumeBlock);
