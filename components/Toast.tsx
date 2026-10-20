/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findComponentByCodeLazy } from "@webpack";

const StatusIcon = findComponentByCodeLazy(".ONLINE&&", ".mask");

// Discord's new toast API only takes an icon component, so the status icon is passed in on its own
export function StatusToastIcon({ status, size }: { status: string; size: number; }) {
    return <StatusIcon status={status} size={size} />;
}
