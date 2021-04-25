import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBallotCheck, faHouse, faPersonBooth } from '@fortawesome/pro-light-svg-icons';
import { AUTH_RECOMMENDER } from './auth/auth.types';

/**
 * Represents a navigable route.
 */
export interface Route {
    /**
     * Any sub-routes navigable under the parent route.
     */
    children?: Route[];

    /**
     * The component to display and render.
     */
    component?: JSX.Element;

    /**
     * A description to display next to the link.
     */
    description?: string;

    /**
     * The icon to display next to the link.
     */
    icon?: IconDefinition;

    /**
     * The auths the route is restricted to.
     */
    auths?: string[];

    /**
     * The human-readable name of the link to display.
     */
    title: string;

    /**
     * The navigable URI segment.
     */
    uri?: string;
}

export const mainRoutes: Route[] = [
    {
        title: 'Main',
        uri: '/',
        icon: faHouse
    },
    {

        title: 'Voting',
        uri: '/voting',
        icon: faPersonBooth,
        children: [
            {
                icon: faBallotCheck,
                title: 'New Ballot',
                uri: '/ballots/new'
            }
        ]
    }
];

export const accountRoutes: Route[] = [

];
